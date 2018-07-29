class Place < ApplicationRecord
  belongs_to :user
  validates_uniqueness_of :user_id, allow_nil: true
end