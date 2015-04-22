class ProductsController < ApplicationController
  respond_to :json
  def index
    @products = Product.all
    respond_to do |format|
      format.json
    end
  end
end
