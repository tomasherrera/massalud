class HomeController < ApplicationController
  layout false, only: [:panel, :index]

  def index
  end

  def welcome
  end

  def panel
    @profile = current_user
  end
end
