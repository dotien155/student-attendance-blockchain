import { network } from "hardhat";

async function main() {
  // Kết nối network kiểu viem
  const { viem } = await network.connect({ network: "hardhat" });

  // Lấy wallet client (người deploy)
  const [deployer] = await viem.getWalletClients();
  console.log("Deploying contract with account:", deployer.account.address);

  // Compile contract (nếu chưa compile thì chạy npx hardhat compile)
  const Attendance = await viem.deployContract("Attendance");

  console.log("Attendance contract deployed to:", Attendance.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
