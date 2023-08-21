class Api::ExpensesController < ApplicationController

    def create
        @expense = Expense.new(expense_params)
        if @expense.save
            render :expense_abrev
        else
            render json: { errors: @expense.errors.full_messages}, status: 422
        end
    end

    private
    def expense_params
        params.require(:expense).permit(:name, :payer_id, :group_id, :amount, :photo)
    end
end

