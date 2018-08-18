namespace :db do
  desc 'It moves wistia videos to digitals'
  task :tables => [ :environment ] do
    4.times do |i|
      table = Table.create(name: i+1)
      14.times do |k|
        Chair.create(number: k+1, table_id: table.id)
      end
    end
  end
end
