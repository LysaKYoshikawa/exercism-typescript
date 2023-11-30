/**
 * This stub is provided to make it straightforward to get started.
 */

export function twoFer(name:string = 'you'): string {
  try {
    return `One for ${name}, one for me.`
    
  } catch (error) {
    throw new Error(`error here: ${error}`);
    
  }
}
