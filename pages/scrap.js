import axios from "axios"
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
import {
  ApolloClient,
  InMemoryCache,
  gql,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const ScrapPage = () => {
  const [collections, setCollections] = useState(null);
  useEffect(() => {
    axios("http://localhost:3000/api/scraper").then((response)=>{
      setCollections(response.data);
    })
  }, [])
 
  // if (!collections) {
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
          {collections &&
            collections.map((collection, index) => (
              <Tr key={index}>
                <Td>
                  <Flex direction={"column"}>
                    <Text fontSize={"lg"}>{collection[index]}</Text>
                    <Text fontSize={"sm"}>Circulating Supply: 9682</Text>
                  </Flex>
                </Td>

                <Td>
                  <Flex direction={"column"}>
                    <Text fontSize={"lg"}>{collection.node.stats.floor}</Text>
                    <Text fontSize={"sm"}>1.15%</Text>
                  </Flex>
                </Td>

                <Td>
                  <Flex direction={"column"}>
                    <Text fontSize={"lg"}>{collection.node.stats.totalSales}</Text>
                    <Text fontSize={"sm"}>118.67%</Text>
                  </Flex>
                </Td>

                <Td>
                  <Flex direction={"column"}>
                    <Text fontSize={"lg"}>{collection.node.stats.average}</Text>
                    <Text fontSize={"sm"}>43.6%</Text>
                  </Flex>
                </Td>

                <Td>
                  <Flex direction={"column"}>
                    <Text fontSize={"lg"}>{collection.node.stats.volumn}</Text>
                    <Text fontSize={"sm"}>214%</Text>
                  </Flex>
                </Td>

                <Td>
                  <Flex direction={"column"}>
                    <Text fontSize={"lg"}>{41633}</Text>
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

export default ScrapPage