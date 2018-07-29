json.places do
  Place.all.each do |place|
    json.set! place.number do
      json.userId place.user_id
      json.userName place.user.try(:name)
      json.avatar place.user.try(:remote_avatar_url)
    end
  end
end