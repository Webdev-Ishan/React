

function reactrender(reactele,mainele){
    const ele =document.createElement(reactele.type);
    ele.innerHTML=reactele.childeren;

    for (const prop in reactele.props) {
       if(prop==='childeren') continue;
       ele.setAttribute( prop,reactele.props[prop]);
    }

    mainele.appendChild(ele);
}

const mainele=document.getElementById('root');

const reactele={
type:'a',

props:{
href:'https://www.google.com/',
target:'_self'

}
,
childeren:'This is a link for google'

}

reactrender(reactele,mainele);