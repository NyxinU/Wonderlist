Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resource :users, only: %i(create)
    resource :session, only: %i(create destroy show)
    resources :tasks, except: %i(new)
  end

  root "static_pages#root"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
