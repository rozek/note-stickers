/*******************************************************************************
*                                                                              *
*                                Note Stickers                                 *
*                                                                              *
*******************************************************************************/
/**** ListsDiffer **** /

  function ListsDiffer (ListA:any[], ListB:any[]):boolean {
    return (
      (ListA.length !== ListB.length) ||
      ListA.some((Element:any, i:number) => Element !== ListB[i])
    )
  }
*/
/**** MovesFor ****/
export type SNS_Move = {
    oldIndex: number;
    newIndex: number;
    Count: number;
};
