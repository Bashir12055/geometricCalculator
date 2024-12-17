//For circle area
const circA = document.querySelector('.circleA');

const cylinderV = document.querySelector('.cylinderV');

const squareA = document.querySelector('.squareA');

const triangleA = document.querySelector('.triangleA');

const sphereV = document.querySelector('.sphereV');


const displayer = document.querySelector('.answer-displayer');

//For circle area
circA.addEventListener('click', () => {
    
    displayer.innerHTML = '';
    
    const calculationElements = document.querySelector('.calc-elements');
    
    calculationElements.innerHTML = `           
            <div class="main-circle-A">
                <form class="circle-A-form">
                    <div class="circle-A">
                        <label class="circle-A-label" for="circle-A">Circle A = π     </label>
                        <input type="number" id="circle-A" class="circle-A-r" placeholder="r" / max='1000' min='0'>
                        <span><sup>2</sup></span>
                    </div>
                    
                    <input id="circle-A-calculate-button" type="submit" value="calculate" id="submit"/>
                </form>
            </div>`;
            
    const form = document.querySelector('form');

    form.addEventListener('submit', e => {
        e.preventDefault();
    
        const r = document.querySelector('.circle-A-r').value;
        
        
        const circleA = Math.round((22/7)*Math.pow(r, 2));
        
        displayer.innerHTML = `
            
            <h1>${circleA}</h1>
        `;
    });

});




//For cylinder volume
cylinderV.addEventListener('click', () => {
    
    displayer.innerHTML = '';
    
    const calculationElements = document.querySelector('.calc-elements');
    
    calculationElements.innerHTML = `           
        <div class="main-cylinder-v">
            <form class="cylinder-v-form">
                <div class="cylinder-v">
                    <label class="cylinder-v-label" for="cylinder-v">Cyl V = 2 π  </label>
                    <input type="number" id="cylinder-v" class="cylinder-v-r" placeholder="r" max='1000' min='0'/>
                    <input type="number" id="cylinder-v" class="cylinder-v-h" placeholder="h"  max='1000' min='0' />
                </div>
            
                <input id="cylinder-v-calculate-button" type="submit" value="calculate" />
            </form>
        </div>`;
    
    
    const form = document.querySelector('form');
    

    form.addEventListener('submit', e => {
        e.preventDefault();
        
        const r = document.querySelector('.cylinder-v-r').value;
        
        const h = document.querySelector('.cylinder-v-h').value;
        
        const cylindeV = Math.round(2*(22/7)*r*h);
        
        displayer.innerHTML = `
            
            <h1>${cylindeV}</h1>
        `;
    
    });

});


//For square area
squareA.addEventListener('click', () => {
    
    displayer.innerHTML = '';
    
    const calculationElements = document.querySelector('.calc-elements');
    
    calculationElements.innerHTML = `           
        <div class="main-square-A">
        
            <form class="square-A-form">
                <div class="square-A">
                    <label class="square-A-label" for="square-A">Square Area = </label>
                    <input type="number" id="square-A" class="square-A-l" placeholder="L" max='1000' min='0' /> <span>2</span>
                </div>
            
                <input id="square-A-calculate-button" type="submit" value="calculate" />
            </form>
        </div>`;
    
    
    const form = document.querySelector('form');
    

    form.addEventListener('submit', e => {
        e.preventDefault();
        
        const l = document.querySelector('.square-A-l').value;
        
        const squareA = Math.round(Math.pow(l, 2));
        
        displayer.innerHTML = `
            
            <h1>${squareA}</h1>
        `;
    
    });

});



//For triangle area
triangleA.addEventListener('click', () => {
    
    displayer.innerHTML = '';
    
    const calculationElements = document.querySelector('.calc-elements');
    
    calculationElements.innerHTML = `           
        <div class="main-triangle-A">
        
            <form class="triangle-A-form">
                <div class="triangle-A">
                    <label class="triangle-A-label" for="triangle-A">Tri Ar = 0.5 × </label>
                    <input type="number" id="triangle-A" class="triangle-A-b" placeholder="b" max='1000' min='0' /> 
                    <input type="number" id="triangle-A" class="triangle-A-h" placeholder="h" max='1000' min='0' /> 
                </div>
            
                <input id="triangle-A-calculate-button" type="submit" value="calculate" />
            </form>
        </div>`;
    
    
    const form = document.querySelector('form');
    

    form.addEventListener('submit', e => {
        e.preventDefault();
        
        const b = document.querySelector('.triangle-A-b').value;
        
        const h = document.querySelector('.triangle-A-h').value;
        
        const triangleA = 0.5*b*h;
        
        displayer.innerHTML = `
            
            <h1>${triangleA}</h1>
        `;
    
    });

});




//For triangle area
sphereV.addEventListener('click', () => {
    
    displayer.innerHTML = '';
    
    const calculationElements = document.querySelector('.calc-elements');
    
    calculationElements.innerHTML = `           
        <div class="main-sphere-V">
        
            <form class="sphere-V-form">
                <div class="sphere-V">
                    <label class="sphere-V-label" for="sphere-V">Sphere V = 1.33 π</label>
                    <input type="number" id="sphere-V" class="sphere-V-r" placeholder="r" max='1000' min='0' /> 
                    <span>3</span>
                </div>
            
                <input id="sphere-V-calculate-button" type="submit" value="calculate" />
            </form>
        </div>
        `;
    
    
    const form = document.querySelector('form');
    

    form.addEventListener('submit', e => {
        e.preventDefault();
        
        const r = document.querySelector('.sphere-V-r').value;
        
        const sphereV = Math.round((4/3)*(22/7)*Math.pow(r, 3));
        
        displayer.innerHTML = `
            
            <h1>${sphereV}</h1>
        `;
    
    });

});