/**
 * Title: book.interface.ts
 * Author: Chris Bohnet
 * Date: 24 August 2020
 * Description: Book interface
 */

export interface IBook {
   isbn: string;
   title: string;
   description: string;
   numOfPages: number;
   authors: Array<string>;
 }
