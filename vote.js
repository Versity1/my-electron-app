// alert("hello")
let counting = "Vote Count: "
let voteFor = 0;
let voteAgainst = 0;


//create function for vote for
function votef(){
    voteFor = voteFor +1
    document.getElementById("count-for").innerText = counting + voteFor
}
//create function for vote against
function voteg(){
    voteAgainst = voteAgainst +1
    document.getElementById("count-against").innerText = counting + voteAgainst 
}
//function for percentage vote for
function votet(){
    totalVotes = voteAgainst + voteFor;
    let read = "TOTAL NUMBER OF VOTES CAST:"
    document.getElementById("total-votes").innerText = read + " " + totalVotes
}
//create function for percentage vote for
function votefp(){
    let readper = "Vote Percentage: "
    percevotefor = voteFor / totalVotes * 100 ;
    document.getElementById("percfor").innerText = readper + percevotefor + "%"
}
//create function for percentage vote for
function votegp(){
    let readper = "Vote Percentage: "
    percevoteag = voteAgainst / totalVotes * 100 ;
    document.getElementById("perag").innerText = readper + percevoteag + "%"
}