class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :spot_id, :comment, :spot_name
end
