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
    exciting.push(facts[exciting.length])
  }

  return exciting

}
