import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  public image : string; 
  public iconImage: string;
  public images = ["/assets/images/אופציה קצרה/שלב 1.png",
                  "/assets/images/אופציה קצרה/שלב 2.png",
                  "/assets/images/אופציה קצרה/שלב 3.png",
                  "/assets/images/אופציה קצרה/שלב 4.png",
                  "/assets/images/אופציה קצרה/שלב 5.png"]
  public option1texts = ['לבשל',
                          'אגשים את החלומות שלי',
                          'כל יום',
                          'אני עושה מה שאני אוהב לא טעיתי',
                          'כן'];
  public option2texts = ['לא יודע',
                          'לא יודע',
                        'לא יודע',
                        ];
  public option3texts = ['להצליח',
                          'עשיר',
                        '?למי יש זמן לבשל בכלל',
                        'אני עובד קשה ומצליח לא טעיתי',
                        'אי אפשר לחיות את החיים באיזו פנטזיה,איך תגשים את החלומת שלך בלי כסף' + '?'];
  public i : number;
  public button1text: string;
  public button2text: string;
  public button3text: string;
  public startButtonText: string;
  public gameStarted = false;
  public points;

  public constructor(){}

  public ngOnInit(){
    this.image = "/assets/images/מי אתה מסך פתיחה.png"
    this.i = 0;
    this.startButtonText = 'התחל'
    this.points = 0;
  }

  public onClick1(){
    this.image = this.images[this.i];
    this.button1text = this.option1texts[this.i]
    this.button2text = this.option2texts[0]
    this.button3text = this.option3texts[this.i]
    this.i++;
    this.points += 1;
    if(this.i > 5){
      this.showEndScreen();
    }
  }

  public onClick2(){
    this.image = this.images[this.i];
    this.button1text = this.option1texts[this.i]
    this.button2text = this.option2texts[0]
    this.button3text = this.option3texts[this.i]
    this.i++;
    this.points += 2;
    if(this.i > 5){
      this.showEndScreen();
    }
  }

  public onClick3(){
    this.image = this.images[this.i];
    this.button1text = this.option1texts[this.i]
    this.button2text = this.option2texts[0]
    this.button3text = this.option3texts[this.i]
    this.i++;
    this.points += 3;
    if(this.i > 5){
      this.showEndScreen();
    }
  }

  public showEndScreen(){
    this.i = 0;
    this.startButtonText = ''
    if(this.points <=6){
      this.image = '/assets/images/אופציה קצרה/סיום1.png'
    }
    else if(this.points >6 && this.points <=11){
      this.image = '/assets/images/אופציה קצרה/סיום2.png'
    }
    else{
      this.image = '/assets/images/אופציה קצרה/סיום3.png'
    }

  }
}
