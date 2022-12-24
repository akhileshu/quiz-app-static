const questions=[
    {
        que:'Grand Central Terminal, Park Avenue, New York is the worlds',
        a:'largest railway station',
        b:'highest railway station',
        c:'longest railway station',
        d:'None of the above',
        correct:'a'
    },
    {
        que:'Entomology is the science that studies',
        a:'None of the above',
        b:'Insects',
        c:'The origin and history of technical and scientific terms',
        d:'The formation of rocks',
        correct:'b'
    },
    {
        que:'Eritrea, which became the 182nd member of the UN in 1993, is in the continent of',
        a:'Asia',
        b:'Africa',
        c:'Europe',
        d:'Australia',
        correct:'b'
    }
]
let index=0
let right=0,wrong=0
let total=questions.length
const quesbox=document.querySelector('.quesbox')
const button=document.querySelector('.button')
const optioninput=document.querySelectorAll('.options')
const box=document.querySelector('#box')


// console.log(optioninput[0].value)
const loadquestion=()=>{
    
    const data=questions[index]
if (index==total){
   return endquiz()
}
reset()
quesbox.innerText=`${index+1})${data.que}`
optioninput[0].nextElementSibling.innerText=data.a
optioninput[1].nextElementSibling.innerText=data.b
optioninput[2].nextElementSibling.innerText=data.c
optioninput[3].nextElementSibling.innerText=data.d
// console.log(data.a)
}
const submit=()=>{
    const data=questions[index]
const answer=getanswer()
// console.log(answer)
     if(answer==data.correct){
        right++
     }else{
        wrong++
     }
     index++
    loadquestion()
     return
}
const getanswer=()=>{
    let answer
    optioninput.forEach(
        (input)=>{
            if(input.checked){
                answer= input.value
                

            }
        }
        
    )
    return answer
}
const reset=()=>{
    optioninput.forEach(
        (input)=>{
            input.checked=false
        }
        
    )
    
}
const endquiz=()=>{
box.innerHTML=`<div style="background-color:#fab1a0 ;padding: 15px;font-size: large;">
<h3>quiz ends</h3>
${right}/${total} are correct answers</div>
`
}

loadquestion()