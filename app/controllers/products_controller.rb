class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :edit, :update, :destroy]
  respond_to :html, :json
  def index
    if current_user
            @products = Product.search(params[:search]).page(params[:page]).per_page(10).where user_id: current_user.id
    else
          @products = Product.search(params[:search]).page(params[:page]).per_page(10)
    end
  end
  # Show Products
  def show
  end
  # New Products
  def new
    @product = Product.new
  end
  # Edit Produts
  def edit
  end
  # Create Products
  def create
    @product = Product.new(product_params)
    respond_to do |format|
      if @product.save
        format.html { redirect_to @product, notice: 'Producto creado correctamente.' }
        format.json { render :show, status: :created, location: @product }
      else
        format.html { render :new }
        format.json { render json: @product.errors, status: :unprocessable_entity }
      end
    end
  end
  # Update Products
  #def update
    #@product = Product.find(params[:id])
    #@product.update_attributes(product_params)
    #respond_with @user
  #end
  def update
    respond_to do |format|
      if @product.update(product_params)
        format.html { redirect_to @product, notice: 'Producto actualizado correctamente.' }
        format.json { render :show, status: :ok, location: @product }
      else
        format.html { render :edit }
        format.json { render json: @product.errors, status: :unprocessable_entity }
      end
    end
  end
  # Destroy Products
  def destroy
    @product.destroy
    respond_to do |format|
      format.html { redirect_to products_url, notice: 'Producto eliminado.' }
      format.json { head :no_content }
    end
  end
  # Private Method Products
  private
    def set_product
      @product = Product.find(params[:id])
    end
    def product_params
      params.require(:product).permit(:name, :description, :stock, :reference, :type_product_id, :user_id, :quantity, :unit_price, :total, :new_used, :avatar, :avatar2, :avatar3, :avatar4)
    end
end