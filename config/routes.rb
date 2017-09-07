Rails.application.routes.draw do
  get 'character_quote/:id/delete', to: "profiles#destroy"

  resources :profiles, only: [:index], as: "character_quote"
end
