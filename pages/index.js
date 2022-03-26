import axios from "axios";
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

const ScrapPage = () => {
  const [collections, setCollections] = useState(null);

  useEffect(() => {
    if (collections === null || collections.length === 0) {
      getData();
    }
  }, [collections]);

  const getData = async () => {
    await axios("/api/get-stats").then((response) => {
      console.log(response.data);
      setCollections(response.data);
    });
  };

  if (!collections || collections.length === 0) {
    return (
      <Flex
        width={"100vw"}
        height={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Spinner
          speed="0.66s"
          emptyColor="gray.200"
          color="blue.500"
          data-testid="loading-spinner"
          size="xl"
          thickness="4px"
        />
      </Flex>
    );
  }

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
            <Th>7D Volume</Th>
          </Tr>
        </Thead>
        <Tbody>
          {collections &&
            collections.map((collection, index) => (
              <Tr key={index}>
                <Td>
                  <Flex alignItems={"center"}>
                    <Text fontSize={"lg"} marginRight={"1rem"}>{index + 1}.</Text>
                    <Flex direction={"column"}>
                      <Text fontSize={"lg"}>{collection.collectionName}</Text>
                      <Text fontSize={"sm"}>
                        Circulating Supply: {collection.circulatingSupply}
                      </Text>
                    </Flex>
                  </Flex>
                </Td>

                <Td>
                  <Flex direction={"column"}>
                    <Text fontSize={"lg"}>
                      {collection.floorPrice.match(/\d.+/g)}
                    </Text>
                    <Text
                      fontSize={"sm"}
                      color={
                        collection.floorPriceTrendDirection
                          ? "red.400"
                          : "green.400"
                      }
                    >
                      {collection.floorPriceTrend}
                    </Text>
                  </Flex>
                </Td>

                <Td>
                  <Flex direction={"column"}>
                    <Text fontSize={"lg"}>{collection.sales}</Text>
                    <Text
                      fontSize={"sm"}
                      color={
                        collection.floorPriceTrendDirection
                          ? "red.400"
                          : "green.400"
                      }
                    >
                      {collection.salesTrend}
                    </Text>
                  </Flex>
                </Td>

                <Td>
                  <Flex direction={"column"}>
                    <Text fontSize={"lg"}>
                      {collection.averagePrice.match(/\d.+/g)}
                    </Text>
                    <Text
                      fontSize={"sm"}
                      color={
                        collection.floorPriceTrendDirection
                          ? "red.400"
                          : "green.400"
                      }
                    >
                      {collection.averagePriceTrend}
                    </Text>
                  </Flex>
                </Td>

                <Td>
                  <Flex direction={"column"}>
                    <Text fontSize={"lg"}>
                      {collection.volume.match(/\d.+/g)}
                    </Text>
                    <Text
                      fontSize={"sm"}
                      color={
                        collection.floorPriceTrendDirection
                          ? "red.400"
                          : "green.400"
                      }
                    >
                      {collection.volumeTrend}
                    </Text>
                  </Flex>
                </Td>

                <Td>
                  <Flex direction={"column"}>
                    <Text fontSize={"lg"}>
                      {collection.marketCap.match(/\d.+/g)}
                    </Text>
                    <Text fontSize={"sm"}>{collection.marketCapTrend}</Text>
                  </Flex>
                </Td>

                <Td>
                  <Flex direction={"column"}>
                    <Text fontSize={"lg"}>41633</Text>
                    <Text fontSize={"sm"}>$108457503</Text>
                  </Flex>
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </Flex>
  );
};
export default ScrapPage;
