// ДЗ
// Добавить лошади свойство усталость.
// по-умолчанию усталость = 0;
// максимальное значение усталости = 10;
// пробег 1км приводит к увеличению усталости на 1.
// var h1 = new Horse();
// h1.run(15);
// // через 10 км лошадь вызвала setTimeout и отдыхает 10 сек.
// после отдыха лошадь опять начинает бежать оставшееся кол-во километров.
// в итоге лошадь пробежала 15 км, ее усталость равна 5.

function Horse(maxTiredness) {
    /* private props */
    var self = this;
    var maxTiredness = maxTiredness || 10;
    var targetMiles = 0;
    var tiredness = 0;

    /* public props */
    this.mileage = 0;

    /* public func */
    this.run = function(miles) {
        if (targetMiles > 0) {
            console.log("I'm running, please wait!");
            return false;
        }
        this.mileage += miles;
        targetMiles = miles;
        calculateTiredness();
        console.log("Let's go!");
        run();
    };
    this.status = function(mess) {
        console.log(mess, {
            "tiredness": tiredness,
            "mileage": self.mileage,
        });
    };

    /* private func */
    function calculateTiredness() {
        tiredness = tiredness + targetMiles;
        return tiredness;
    };


    function run() {

        if (targetMiles > maxTiredness) {
            console.log("It's too big distance! I need some rest.");
            setTimeout(function() {
                console.log("Ok, guys, I'm ready!");
                targetMiles = targetMiles - maxTiredness;
                tiredness = tiredness - maxTiredness;
                run(targetMiles);
            }, maxTiredness * 1000);
        } else if (tiredness > maxTiredness) {
            console.log("I'm tired! I need some rest.");
            setTimeout(function() {
                console.log("Ok, guys, I'm ready!");
                targetMiles = tiredness - maxTiredness;
                tiredness = tiredness - maxTiredness;
                run(targetMiles);
            }, maxTiredness * 1000);
        } else {
            targetMiles = 0;
            self.status("I'm on the spot.");
        };
    };

};

var horse = new Horse();
horse.run(1);
horse.run(13);