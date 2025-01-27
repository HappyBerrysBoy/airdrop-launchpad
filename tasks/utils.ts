export async function getContract(
  contractName: string,
  address: string,
  ethers: any
) {
  return await ethers.getContractAt(contractName, address);
}
