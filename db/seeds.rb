# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


    
    puts "Destroying tables..."
    User.destroy_all
  
    puts "Resetting primary keys..."
    ApplicationRecord.connection.reset_pk_sequence!('users')
  
    puts "Creating users..."
    User.create!(
      first_name: 'demo', 
      last_name: 'user',
      email: 'demo@demo.com', 
      zip_code: '11370',
      password: '123456'
    )

    10.times do 
        User.create!({
          first_name: Faker::Name.first_name,
          last_name: Faker::Name.last_name ,
          email: Faker::Internet.unique.email,
          zip_code: Faker::Address.zip_code,
          password: 'password'
        }) 
      end

      Shop.create!(
        name: 'Van Leeuwen Ice Cream',
        address: '204 Wythe Ave',
        city: 'New York',
        state: 'New York',
        zip_code: "11249",
        link: 'https://vanleeuwenicecream.com/',
        price_range: 8,
        phone_number: '(929)337-6907',
        longitude: 40.7184296,
        latitude: -73.9623795
      )
      Shop.create!(
        name: 'Minus Celsius',
        address: '302 Grand St',
        city: 'New York',
        state: 'New York',
        zip_code: "10002",
        link: 'https://www.mcusa.net/',
        price_range: 10,
        phone_number: '(407)797-7174',
        longitude: 40.718162,
        latitude: -73.993784
      )
      Shop.create!(
        name: 'Odd Fellows',
        address: '334 Furman Street',
        city: 'Brooklyn',
        state: 'New York',
        zip_code: "11201",
        link: 'https://www.oddfellowsnyc.com/',
        price_range: 9,
        phone_number: '(845)495-3229',
        longitude: 40.6950,
        latitude: 73.0017
      )
  
      
    puts "Done!"
  end