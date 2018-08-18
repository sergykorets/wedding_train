json.tables do
  Table.all.each do |table|
    json.set! table.id do
      table.chairs.each do |chair|
        json.set! chair.id do
          json.number chair.number
          json.userId chair.user_id
          json.name chair.user.try(:name)
          json.avatar chair.user.try(:remote_avatar_url)
        end
      end
    end
  end
end
