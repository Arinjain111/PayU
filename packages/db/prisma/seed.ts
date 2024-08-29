import { PrismaClient } from '@prisma/client'
import bycrypt from "bcrypt"
const prisma = new PrismaClient()

async function main() {
  const alice = await prisma.user.upsert({
    where: { number: '9999999999' },
    update: {},
    create: {
      number: '9999999999',
      password: await bycrypt.hash('alice', 10),
      name: 'alice',
      onRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Success",
          amount: 20000,
          token: "1",
          provider: "HDFC Bank",
        },
      },
      Balance: {
        create: {
          amount: 20000,
          locked: 0,
        }
      }
    },
  })
  const bob = await prisma.user.upsert({
    where: { number: '9999999998' },
    update: {},
    create: {
      number: '9999999998',
      password: await bycrypt.hash('bob', 10),
      name: 'bob',
      Balance: {
        create: {
          amount: 20000,
          locked: 200000,
        }
      },
      onRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Failure",
          amount: 2000,
          token: "2",
          provider: "HDFC Bank",
        },
      },
    },
  })
  console.log({ alice, bob })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })