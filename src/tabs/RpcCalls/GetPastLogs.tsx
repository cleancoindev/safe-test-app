import React, { useState } from "react"
import styled from "styled-components"
import { Button, TextInput, Text } from "evergreen-ui"
import { SdkInstance } from "@gnosis.pm/safe-apps-sdk"

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

type OwnProps = {
  sdk: SdkInstance
}

const GetPastLogs = ({ sdk }: OwnProps): React.ReactElement => {
  const [fromBlock, setFromBlock] = useState("0xA8ACC3")
  const [toBlock, setToBlock] = useState("latest")

  const handleClick = () => {
    sdk.eth.getPastLogs({
      params: [
        {
          fromBlock,
          toBlock,
        },
      ],
    })
  }

  return (
    <Container>
      <Text>getPastLogs(fromBlock, toBlock)</Text>
      <TextInput
        value={fromBlock}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setFromBlock(e.target.value)
        }}
        marginTop={4}
      />
      <TextInput
        value={toBlock}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setToBlock(e.target.value)
        }}
        marginTop={4}
      />
      <Button
        appearance="primary"
        onClick={handleClick}
        maxWidth={140}
        justifyContent="center"
        marginTop={8}
      >
        Request
      </Button>
    </Container>
  )
}

export default GetPastLogs
