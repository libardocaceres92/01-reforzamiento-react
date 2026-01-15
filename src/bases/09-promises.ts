const myPromese = new Promise<number>((resolve,reject) => {

    setTimeout(() => {
        //! Yo quiero mi dinero !!
        //console.log('Done!');

        resolve(100);

        //reject('Mi amigo se perdio');

    },2000);
});


myPromese
    .then(
        (myMoney) => {
            console.log(`Tengo ${myMoney} dólares`);
        }
    ).catch(
        (reason) => {
            console.warn(reason);
        }
    ).finally(
        () => {
            console.log('Pues a seguir con mi vida');
        }
    );