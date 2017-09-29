class Api::TasksController < ApplicationController
  before_action :deny_access_if_not_logged_in

  def index
    tasks = Task.where(user_id: current_user.id)

    if params[:query]
      tasks = tasks.where(completed: false)
      @tasks = tasks.where(["lower(title) LIKE ?", "%#{params[:query.downcase]}%"])
    elsif params[:listId]
      @tasks = tasks.where(list_id: params[:listId])
    else
      @tasks = tasks
    end
    render :index
  end
  #if params has the list_id , then @tasks should return only the tasks w that list id USING sql .where

  def show
    @task = Task.find(params[:id])

    if @task
      render :show
    else
      render json: ['This task does not exist'], status: 404
    end
  end

  def create
    @task = Task.new(task_params)

    if @task.save
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def update
    @task = Task.find(params[:id])

    if @task.update(task_params)
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def destroy
    Task.where(list_id: params[:listId]).destroy_all if params[:listId]

    @task = Task.find(params[:id])
    # if i get a list_id task.where(list_id: params[list_id]).destroy_all
    if @task
      @task.destroy
      render :show
    else
      render json: ["Task does not exist"], status: 404
    end
  end



  private

  def task_params
    params.require(:task).permit(:title, :list_id, :due, :reward, :completed, :user_id)
  end

end
