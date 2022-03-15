import {
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Spinner,
  SpinnerProps,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function Home() {
  // const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(async () => {
  //   setData(await getInfoBySlug("cool-cats-nft"));
  // }, []);

  // if (loading) {
  //   return (
  //     <Spinner
  //       speed="0.66s"
  //       emptyColor="gray.200"
  //       color="blue.500"
  //       data-testid="loading-spinner"
  //       size="xl"
  //       thickness="4px"
  //     />
  //   );
  // }

  return (
    <Flex>
      <Table colorScheme={"blackAlpha"} variant={"simple"}>
        <Thead>
          <Tr>
            <Th>Collection</Th>
            <Th>Floor</Th>
            <Th>Sales</Th>
            <Th>Average</Th>
            <Th>Volume</Th>
            <Th>MKT CAP</Th>
            <Th>7D Volumn</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Flex direction={"column"}>
                <Text fontSize={"lg"}>CyberBrokers</Text>
                <Text fontSize={"sm"}>Circulating Supply: 9682</Text>
              </Flex>
            </Td>

            <Td>
              <Flex direction={"column"}>
                <Text fontSize={"lg"}>4.3</Text>
                <Text fontSize={"sm"}>1.15%</Text>
              </Flex>
            </Td>

            <Td>
              <Flex direction={"column"}>
                <Text fontSize={"lg"}>890</Text>
                <Text fontSize={"sm"}>118.67%</Text>
              </Flex>
            </Td>

            <Td>
              <Flex direction={"column"}>
                <Text fontSize={"lg"}>4.505</Text>
                <Text fontSize={"sm"}>43.6%</Text>
              </Flex>
            </Td>

            <Td>
              <Flex direction={"column"}>
                <Text fontSize={"lg"}>4009.85</Text>
                <Text fontSize={"sm"}>214%</Text>
              </Flex>
            </Td>

            <Td>
              <Flex direction={"column"}>
                <Text fontSize={"lg"}>41633</Text>
                <Text fontSize={"sm"}>$108457503</Text>
              </Flex>
            </Td>

            <Td>
              <Flex direction={"column"}>
                <Text fontSize={"lg"}>41633</Text>
                <Text fontSize={"sm"}>$108457503</Text>
              </Flex>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Flex>
  );
}
