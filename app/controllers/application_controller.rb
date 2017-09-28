class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  private

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def require_logged_in
    unless current_user
      render json: { base: ['Invalid Credentials'] }, status: 401
    end
  end

  def redirect_if_logged_in
    redirect_to root_url if logged_in?
  end

  def redirect_if_not_logged_in
    redirect_to new_session_url unless logged_in?
  end

  def deny_access_if_not_logged_in
    unless logged_in?
      render json: ['You must be logged in to do that'], status: :unauthorized
    end
  end

  def search
    @tasks = Task.where("LOWER(title) LIKE ?", "%params[:query].downcase%")
  end

end
