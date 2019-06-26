### Installing pre-requisites
Make sure you have the required pre-requisites by following [Installing pre-requisites](https://hyperledger.github.io/composer/latest/installing/installing-prereqs.html).

### Hyperledger Composer Installation

At your home directory, install the prerequisites by running the following script:
``` bash
cd $HOME
curl -O -k https://hyperledger.github.io/composer/latest/prereqs-ubuntu.sh
chmod u+x prereqs-ubuntu.sh
run the command to install the:
sudo apt-get install -y software-properties-common
```

### Install Required Components
```bash
npm install -g composer-cli@0.20
npm install -g composer-rest-server@0.20
npm install -g generator-hyperledger-composer@0.20
npm install -g yo
```

### Install Playground

```bash
npm install -g composer-playground@0.20
```

### Install Hyperledger Fabric
Create a directory fabric-dev-servers at your home directory.
mkdir ~/fabric-dev-servers && cd ~/fabric-dev-servers

```bash
git clone https://github.com/et-taousy/hyperledger-composer-interop
```
### Download the runtime:

```bash
export FABRIC_VERSION=hlfv12
./downloadFabric.sh
```
###  Running on the First Time

```bash
cd ~/fabric-dev-servers
    
 export PATH=~~/go/src/github.com/fabric-samples/bin:$PATH
 export FABRIC_VERSION=hlfv12
 ./startFabric.sh
 ./createPeerAdminCard.sh
cd bl-interop
composer archive create -t dir -n .
composer network install --card PeerAdmin@hlfv1 --archiveFile bl-interop/bl-interop@0.0.4.bna

composer network start --networkName bl-interop --networkVersion 0.0.4 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card

composer card delete -c admin@bl-interop
composer card import --file networkadmin.card

composer network ping --card admin@bl-interop
```

### start composer playground
```bash
composer-playground
```

