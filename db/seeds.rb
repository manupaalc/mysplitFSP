# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


ApplicationRecord.transaction do 
    User.destroy_all

    ApplicationRecord.connection.reset_pk_sequence!('users')
    User.create!(
        username: 'Leo Messi',
        email: 'messi@god.com',
        password: 'password'
    )

     User.create!(
        username: 'Jordi Alba',
        email: 'jordi@np.com',
        password: 'password'
    )

     User.create!(
        username: 'Sergio Busquets',
        email: 'sergio@np.com',
        password: 'password'
    )
end