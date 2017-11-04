export class BudgetItem {
  id : number
  amount : number
  customer_id : string
  categoryType : string
}


/*
  budgetItems : BudgetItem [];
  
  populateBudgetItems(){
    let budgetItems = new Array() as Array<BudgetItem>
    let b : BudgetItem = new BudgetItem()
    b.amount = 20
    b.categoryType = 'food'
    b.customer_id = 'abcdefg'

    budgetItems.push(b)
    budgetItems.push(b)
    console.log(JSON.stringify(budgetItems))

  }
*/
