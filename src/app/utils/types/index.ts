export interface createUsernameInput {
    username: string;
}
  
export interface createUsernameOutput {
    createUsername: {
        success: boolean;
        error: string;
    };
}
  