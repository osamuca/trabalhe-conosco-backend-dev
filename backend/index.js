// const csvFilePath = './users.csv'
// const csv = require('csvtojson')

// // csv()
// csv({noheader:true})
// .fromFile(csvFilePath)
// .on('json',(jsonObj)=>{
// // combine csv header row and csv line to a json object
// // jsonObj.a ==> 1 or 4
// console.log('jsonObj', jsonObj)
// })
// .on('done',(error)=>{
// console.log('end')
// })

// const csvFilePath = './users.csv'
// const csv = require('csvtojson')

// csv({noheader:true})
// .fromFile(csvFilePath)
// .on('json',(jsonObj)=>{
// // combine csv header row and csv line to a json object
// // jsonObj.a ==> 1 or 4
// console.log('jsonObj', jsonObj)

// // console.log('id', jsonObj[0][0])
// // console.log('name', jsonObj[0][1])
// // console.log('username', jsonObj[0][2])


// })
// .on('done',(error)=>{
// console.log('end')
// })

// const csvFilePath = './user.csv'
// const csv = require('csvtojson')

// let json = []

// csv({noheader:true})
//     .fromFile(csvFilePath)
//     .on('json',(jsonObj)=>{
//     json.push(jsonObj)
// })
//     .on('done',(error)=>{
//     console.log('end', json)
// })

// const users = [ { field1: '6e172695-c76c-4364-8dd9-44e6d2d3aed9',
// field2: 'Heitor Rovaron',
// field3: 'heitor.rovaron' },
// { field1: '4e8660b0-7350-4211-9b9b-9ba50792ccd9',
//   field2: 'Melony Terci',
// field3: 'melony.terci' },
// { field1: '7e3d4092-6664-4162-9866-c4256507a35e',
//   field2: 'Tatiana Arrieiro Filgueira',
// field3: 'tatianaarrieirofilgueira' },
// { field1: 'd41d1b73-e28a-4464-a640-abfe1d913cfd',
//   field2: 'Nadja Elias',
// field3: 'nadjaelias' },
// { field1: '657eb911-3fd1-4317-9430-f5f53199754c',
//   field2: 'Rafael Furtado',
// field3: 'rafael.furtado' } ]

// const findById = ( list ) => ( id ) => 
// list.find( obj => obj.field1.match( id ) )

// const findByName = ( list ) => ( name ) => 
// list.find( obj => obj.field2.match( name ) )

// const findByUsername = ( list ) => ( name ) => 
// list.find( obj => obj.field3.match( name ) )

// const actions = ( list ) => ( {
// id: findById( list ),
// name: findByName( list ),
// username: findByUsername( list )
// } )

// const find = ( list ) => ( type ) => 
// actions( list )[ type ]

// const findIn = find( users )

// console.log( '------------------------------------' )
// console.log( '\nfind by id 7e3d4092-6664-4162-9866-c4256507a35e:', findIn( 'id')( '7e3d4092-6664-4162-9866-c4256507a35e' ) )
// console.log( '\nfind by name Rafael Furtado:', findIn( 'name')( 'Rafael Furtado' ) )
// console.log( '\nfind by username nadjaelias:', findIn( 'username')( 'nadjaelias' ) )
// console.log( '------------------------------------' ); 

// const users = [ { field1: '6e172695-c76c-4364-8dd9-44e6d2d3aed9',
// field2: 'Heitor Rovaron',
// field3: 'heitor.rovaron' },
// { field1: '4e8660b0-7350-4211-9b9b-9ba50792ccd9',
//   field2: 'Melony Terci',
// field3: 'melony.terci' },
// { field1: '7e3d4092-6664-4162-9866-c4256507a35e',
//   field2: 'Tatiana Arrieiro Filgueira',
// field3: 'tatianaarrieirofilgueira' },
// { field1: 'd41d1b73-e28a-4464-a640-abfe1d913cfd',
//   field2: 'Nadja Elias',
// field3: 'nadjaelias' },
// { field1: '657eb911-3fd1-4317-9430-f5f53199754c',
//   field2: 'Rafael Furtado',
// field3: 'rafael.furtado' } ]

// const findById = ( list ) => ( id ) => 
// list.find( obj => obj.field1.match( id ) )

// const findByName = ( list ) => ( name ) => 
// list.find( obj => obj.field2.match( name ) )

// const findByUsername = ( list ) => ( name ) => 
// list.find( obj => obj.field3.match( name ) )

// const actions = ( list ) => ( {
// id: findById( list ),
// name: findByName( list ),
// username: findByUsername( list )
// } )

// const find = ( list ) => ( type ) => 
// actions( list )[ type ]

// const findIn = find( users )

// console.log( '------------------------------------' )
// console.log( '\nfind by id 7e3d4092-6664-4162-9866-c4256507a35e:', findIn( 'id')( '7e3d4092-6664-4162-9866-c4256507a35e' ) )
// console.log( '\nfind by name Rafael Furtado:', findIn( 'name')( 'Rafael Furtado' ) )
// console.log( '\nfind by username nadjaelias:', findIn( 'username')( 'nadjaelias' ) )
// console.log( '------------------------------------' ); 

const csvFilePath = './user.csv'
const csv = require( 'csvtojson' )

const findById = ( list ) => ( id ) => 
  list.find( obj => obj.field1.match( id ) )

const findByName = ( list ) => ( name ) => 
  list.find( obj => obj.field2.match( name ) )

const findByUsername = ( list ) => ( name ) => 
  list.find( obj => obj.field3.match( name ) )

const actions = ( list ) => ( {
  id: findById( list ),
  name: findByName( list ),
  username: findByUsername( list )
} )

const find = ( list ) => ( type ) => 
  actions( list )[ type ]

let json = []

csv( { noheader: true } )
  .fromFile( csvFilePath )
  .on( 'json', ( jsonObj ) => {
    json.push( jsonObj )
  } )
  .on( 'done', ( error ) => {
    console.log( 'end', json )

    const findIn = find( json )
    
    console.log( '------------------------------------' )
    console.log( '\nfind by id 7e3d4092-6664-4162-9866-c4256507a35e:', findIn( 'id' )( '7e3d4092-6664-4162-9866-c4256507a35e' ) )
    console.log( '\nfind by name Rafael Furtado:', findIn( 'name' )( 'Rafael Furtado' ) )
    console.log( '\nfind by username nadjaelias:', findIn( 'username' )( 'nadjaelias' ) )
    console.log( '------------------------------------' )
  } )