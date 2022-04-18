class Review < ApplicationRecord
    belongs_to :user
    belongs_to :spot 

    def spot_name
        self.spot.name
      end

      def author 
        self.user.username
      end

      def latitude 
        self.spot.lat
      end

      def longitude 
        self.spot.lng
      end
end
