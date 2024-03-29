import { getAccList, setAccList } from 'utils/store';

export default {
    add(account, index = -1) {
        if (!account.addr && !account.entropy && !account.id) {
            return;
        }

        const data = getAccList() || [];
        if (index > -1 && index < data.length) {
            data.splice(index, 1);
        }

        let i;
        const saveList = [];
        let saveIndex = -1;

        const pushWalletAcc = acc => {
            if (saveIndex === -1) {
                saveIndex = saveList.length;
                saveList.push(acc);
                return;
            }

            const saveAcc = saveList[saveIndex];
            acc.addrNum = acc.addrNum >= saveAcc.addrNum ? acc.addrNum : saveAcc.addrNum;
            saveList[saveIndex] = acc;
        };

        for (i = 0; i < data.length; i++) {
            const acc = data[i];

            // Wallet account repeat
            if ((acc.id && account.id && account.id === acc.id)
                || (acc.entropy && account.entropy && account.entropy === acc.entropy)) {
                account.addrNum = account.addrNum >= acc.addrNum ? account.addrNum : acc.addrNum;
                pushWalletAcc(account);
            } else if (acc.addr && account.addr && account.addr === acc.addr) {
                if (saveIndex === -1) {
                    saveIndex = saveList.length;
                    saveList.push(account);
                } else {
                    saveList[saveIndex] = account;
                }
            } else {
                saveList.push(acc);
            }
        }

        (saveIndex === -1) && saveList.push(account);
        setAccList(saveList);
    }
};
