//part one
function theBeatlesPlay(musicians, instruments){
  var band = new Array()
  for (let i = 0; i < musicians.length; i++){
    band.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return band
}



//part two
function johnLennonFacts(facts){
  var exciting = new Array()

  while(exciting.length != facts.length){

    exciting.unshift(`${facts.slice(facts.length)}!!!`)

    //or

    exciting[exciting.length] = facts.slice(exciting.length)

  }

  return exciting

}
