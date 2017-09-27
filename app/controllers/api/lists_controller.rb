class Api::ListsController < ApplicationController
  before_action :deny_access_if_not_logged_in

  def index
    @lists = List.where(user_id: current_user.id)

    # @lists = lists

    render :index
  end

  def show
    @list = List.find(params[:id])

    if @list
      render :show
    else
      render json: ['This list does not exist'], status: 404
    end
  end

  def create
    @list = List.new(list_params)

    if @list.save
      render :show
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def update
    @list = List.find(params[:id])

    if @list
      @list.update(list_params)
      render :show
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def destroy
    @list = List.find(params[:id])

    if @list
      @list.destroy
      render :show
    else
      render json: ["List does not exist"], status: 404
    end
  end

  private

  def list_params
    params.require(:list).permit(:title, :user_id)
  end
end
