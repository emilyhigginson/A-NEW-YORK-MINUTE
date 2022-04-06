class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :spot_id, :spot_name, :spot_image, :spot_category, :spot_image, :spot_price
  
end
