# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


# ApplicationRecord.transaction do 
    require "open-uri"
    # Destroy all existing records
    SplitExpense.destroy_all
    Comment.destroy_all
    Expense.destroy_all
    GroupUser.destroy_all
    Friend.destroy_all
    Group.destroy_all
    User.destroy_all

    #resetting id keys
    ApplicationRecord.connection.reset_pk_sequence!('split_expenses')
    ApplicationRecord.connection.reset_pk_sequence!('comments')
    ApplicationRecord.connection.reset_pk_sequence!('expenses')
    ApplicationRecord.connection.reset_pk_sequence!('friends')
    ApplicationRecord.connection.reset_pk_sequence!('group_users')
    ApplicationRecord.connection.reset_pk_sequence!('groups')
    ApplicationRecord.connection.reset_pk_sequence!('users')


    messi = User.create!(
        username: 'Leo Messi',
        email: 'messi@god.com',
        password: 'password'
    )
    messi.photo.attach(io: URI.open("https://mysplit-seeds.s3.us-west-1.amazonaws.com/messi.png"),filename: "messi.png")
    
    jordi = User.create!(
        username: 'Jordi Alba',
        email: 'jordi@np.com',
        password: 'password'
    )
    jordi.photo.attach(io: URI.open("https://mysplit-seeds.s3.us-west-1.amazonaws.com/jordi.png"),filename: "jordi.png")

    sergio = User.create!(
        username: 'Sergio Busquets',
        email: 'sergio@np.com',
        password: 'password'
    )
    sergio.photo.attach(io: URI.open("https://mysplit-seeds.s3.us-west-1.amazonaws.com/sergio.png"),filename: "sergio.png")

    antonella = User.create!(
        username: 'Antonela Raccuzzo',
        email: 'antonela@email.com',
        password: 'password'
    )
    antonella.photo.attach(io: URI.open("https://mysplit-seeds.s3.us-west-1.amazonaws.com/antonella.png"),filename: "antonella.png")

    julian = User.create!(
        username: 'Julian Alvarez',
        email: 'julian@np.com',
        password: 'password'
    )
    julian.photo.attach(io: URI.open("https://mysplit-seeds.s3.us-west-1.amazonaws.com/julian.png"),filename: "julian.png")
                                                
    rodrigo = User.create!(
        username: 'Rodrigo De Paul',
        email: 'rodri@np.com',
        password: 'password'
    )
    rodrigo.photo.attach(io: URI.open("https://mysplit-seeds.s3.us-west-1.amazonaws.com/rogrigo.png"),filename: "rodrigo.png")
                                       
    kids_group = Group.create!(
        name: 'Kids',
        kind: 'Couple'
    )
    kids_group.photo.attach(io: URI.open("https://mysplit-seeds.s3.us-west-1.amazonaws.com/kids.jpeg"),filename: "kids.jpeg")
    
    inter_miami_group = Group.create!(
        name: 'Inter Miami',
        kind: 'Other'
    )
    inter_miami_group.photo.attach(io: URI.open("https://mysplit-seeds.s3.us-west-1.amazonaws.com/inter.png"),filename: "inter.png")
    
    argentina_group = Group.create!(
        name: 'Argentina',
        kind: 'Trip'
    )
    argentina_group.photo.attach(io: URI.open("https://mysplit-seeds.s3.us-west-1.amazonaws.com/afa.png"),filename: "afa.png")

    # Add users to groups
    kids_group.users << [messi, antonella]
    inter_miami_group.users << [messi, jordi, sergio]
    argentina_group.users << [messi, julian, rodrigo]

    # Create expenses
    kids_expense = kids_group.expenses.create!(
        payer: messi,
        name: 'Toys',
        amount: 120
    )
    
    inter_miami_expense = inter_miami_group.expenses.create!(
        payer: messi,
        name: 'Dinner',
        amount: 300
    )
    
    argentina_expense = argentina_group.expenses.create!(
        payer: messi,
        name: 'Tour',
        amount: 450
    )

    # Split expenses
    kids_group.users.each do |user|
        kids_expense.split_expenses.create!(
            debtor: user,
            amount: kids_expense.amount / kids_group.users.count
        )
    end

    inter_miami_group.users.each do |user|
        inter_miami_expense.split_expenses.create!(
            debtor: user,
            amount: inter_miami_expense.amount / inter_miami_group.users.count
        )
    end

    argentina_group.users.each do |user|
        argentina_expense.split_expenses.create!(
            debtor: user,
            amount: argentina_expense.amount / argentina_group.users.count
        )
    end

    # Create comments
    kids_expense.comments.create!(
        user: antonella,
        body: 'Great toys!'
    )
    
    inter_miami_expense.comments.create!(
        user: messi,
        body: 'Amazing dinner!'
    )
    
    argentina_expense.comments.create!(
        user: julian,
        body: 'Incredible tour!'
    )

    # Create friendships for Messi
    [jordi, sergio, antonella, julian, rodrigo].each do |friend|
        Friend.create!(
            user: messi,
            friend: friend,
            pending: false
        )
    end
# end
