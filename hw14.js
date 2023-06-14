class Timer {
    stat = 0; //1 - start, 2 - stop, 0 - reset

    hours = 0;
    minutes = 0;
    seconds = 0;

    timerDisplay = null;

    timerBuilder(){
        const displayId = Date.now();
        const start = document.createElement("button");
        start.classList.add("start-btn");
        start.textContent = "start";
        start.addEventListener("click",function(){
            console.log(this.stat);
            this.stat = 1; 
        }.bind(this)); 

        const stop = document.createElement("button");
        stop.classList.add("stop-btn");
        stop.textContent = "stop";
        stop.addEventListener("click", function(){
            console.log(this.stat);
            this.stat = 2;
        }.bind(this));

        const reset = document.createElement("button");
        reset.classList.add("reset-btn"); 
        reset.textContent = "reset";
        reset.addEventListener("click", function(){
            console.log(this.stat);
            this.stat = 0;
        }.bind(this));

        const display = document.createElement("h3");
        display.id = `display-${displayId}`;
        display.textContent = "00:00:00";
    
        const frame = document.createElement("div");  
        frame.classList.add("timer-div");

        frame.appendChild(display)
        frame.appendChild(start);
        frame.appendChild(stop);
        frame.appendChild(reset);
        
        document.body.appendChild(frame);
        this.timerDisplay = document.getElementById(`display-${displayId}`);
    };


    secondPlus(){
        this.seconds += 1; 
        if(this.seconds === 60){
         
            this.seconds = 0;
            this.minutes += 1;
        }
        if(this.minutes === 60){
            this.hours += 1;
            this.minutes = 0;
        }
    };

    timerController(){
        switch(this.stat){
            case 0:
                this.hours = 0;
                this.minutes = 0;
                this.seconds = 0;
                break;
            case 1:
                this.secondPlus();
                break;
            case 2:
                break;
        }
    
        this.timerDisplay.innerHTML = `${this.hours.toString().padStart(2,"0")}:${this.minutes.toString().padStart(2,"0")}:${Math.round(this.seconds).toString().padStart(2,"0")}`;
    };

}


const timer = new Timer();
timer.timerBuilder();

setInterval(()=>timer.timerController(), 1000);







