export class Card {
    name: string = "";
    amount: number = 0;

    public toIndexString(p:Card):String {
        return Card.pointToIndexString(p.name, p.amount);  
    }       
    static pointToIndexString(name: string, amount: number ):String {
        return name + "@" + amount;   
    }       
}