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
    
    //push the sliced element of facts to exciting
    //first element: facts.slice(1), facts.slice(2), facts.slice(3), facts.slice(4)
    //lenght of exciting starts at 0, 1 element, 2, 3, and finally n) } !!

  return 