import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ExpensesApiService } from './expenses-api.service';
import {
  Expense,
  ExpenseCreateInput,
  EXPENSES_API_ROUTE,
} from '@expense-report/expenses/shared';

@Controller(EXPENSES_API_ROUTE)
export class ExpensesApiController {
  constructor(private service: ExpensesApiService) {}

  /**
   * TODO: perform validation
   */
  @Post()
  async createExpenses(@Body() data: ExpenseCreateInput[]): Promise<{
    data: Expense | Expense[];
  }> {
    return {
      data: await this.service.createExpenses(data),
    };
  }

  @Get(':id')
  async getExpense(@Param('id') id: string): Promise<{ data: Expense }> {
    const data = await this.service.getExpense(id);
    if (!data) {
      throw new NotFoundException(
        `Could not find any transaction line items with id: ${id}`
      );
    }
    return { data };
  }

  @Get()
  async getExpenses(
    @Query('id') rawIds: string
  ): Promise<{ data: Expense[] | null }> {
    const ids = rawIds
      ? (rawIds || '').split(',').map((rawId) => rawId.trim())
      : [];

    const data = await this.service.getExpenses(ids);
    return { data };
  }

  @Patch(':id')
  async updateExpense(
    @Param('id') id: string,
    @Body() body: ExpenseCreateInput
  ) {
    if (!body.id) {
      body.id = id;
    }

    if (body.id !== id) {
      throw new BadRequestException({
        message: `id in URI (${id}) and id in request body (${body.id}) must match`,
        requestBody: body,
        uriId: id,
      });
    }

    const before = await this.service.getExpense(id);
    const updates = await this.service.updateExpenses([body]);
    const updatedItem = await this.service.getExpense(id);
    return { before, count: updates.length, data: updatedItem };
  }

  /**
   * (unusual design, consider refactor if better design emerges)
   * @param body represents a batch (array) of updates where:
   *    - the `id` defines the expense item being updated
   *    - each included field holds the new value for the expense item
   */
  @Patch()
  async updateExpenses(@Body() body: ExpenseCreateInput[]) {
    const ids = (body || []).map((item, index) => {
      if (!item.id) {
        throw new BadRequestException({
          message: `Error on item ${index} - missing transaction line item id is ${item.id}`,
          data: { item },
        });
      }
      return item.id;
    });
    const before = await this.service.getExpenses(ids);
    const updates = await this.service.updateExpenses(body);
    const updatedItems = await this.service.getExpenses(ids);
    return { before, count: updates.length, data: updatedItems };
  }

  @Delete(':id')
  async deleteExpense(@Param('id') id: string) {
    const modified = await this.service.getExpense(id);
    const { count } = await this.service.deleteExpenses([id]);
    return { count, data: modified };
  }

  /**
   * @param rawIds comma separated list of ids
   */
  @Delete()
  async deleteExpenses(@Query('id') rawIds: string) {
    const ids = rawIds
      ? (rawIds || '').split(',').map((rawId) => rawId.trim())
      : [];
    const deleted = await this.service.getExpenses(ids);
    const { count } = await this.service.deleteExpenses(ids);
    return { count, data: deleted };
  }
}
