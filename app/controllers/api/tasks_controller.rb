class Api::TasksController < ApplicationController
  def index
    @task = Task.all
  end

  def show
    @task = Task.find(params[:id])
  end

  def create
    @task = Task.new(task_params)

    if @task.save!
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy

    render :show
  end

  def update
    @task = Task.find(params[:id])
    if @task.update(task_params)
      render :show
    else
      render json @task.errors.full_messages, status: 422
    end 
  end

  private

  def task_params
    params.require(:task).permit(:title, :list_id, :due, :reward, :completed)
  end

end
