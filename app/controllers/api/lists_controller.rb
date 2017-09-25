class Api::ListsController < ApplicationController
  def index
    @lists = List.all
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
    params.require(:list).permit(:title, :author_id)
  end
end
