class Api::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :redirect_if_logged_in

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :first_name, :last_name)
  end
end
