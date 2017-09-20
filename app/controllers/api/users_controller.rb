class Api::UsersController < ApplicationController
  def create
    @user = user.new(user_params)

    if @user.save
      login(@user)
      # renders all task list
    else
      render json: @user.errors.full_mesages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
