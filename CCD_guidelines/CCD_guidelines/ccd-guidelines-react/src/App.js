
import {Button, TextField, ActionButton, Slider,  Flex, View, Tabs,  TabList, TabPanels, Item, defaultTheme, Provider, Content, Divider,  Heading, Text, ContextualHelp, ActionGroup} from '@adobe/react-spectrum';
import './journal_uc.min-1683811901.css'
import './index.css'


function App() {
  return ( <div>
    <div className='font_n1 m_5'> Entered TEsst</div>

     <Provider theme={defaultTheme}>
      <View  borderWidth="thin"
      borderColor="dark"
      borderRadius="medium"
      padding="size-250">
      <Flex direction="column" flexBasis="500"
            width="static-size-2000"
            gap="size-100" alignItems="center" justifyContent="center"
            marginX="size-100"
          >
        <View >
          <Content UNSAFE_className="interactiveTitle font_3">
          Chronic Coronary Disease Guideline
          </Content>
          <Content>Interactive Tool</Content>
          <Divider />
        </View>
        <View >
            <Tabs aria-label="History of Ancient Rome"  >
            <TabList>
              <Item key="Eval">Evaluate</Item>
              <Item key="Rec">Recomendations</Item>
            </TabList>
            <TabPanels>
              <Item key="Eval">
                <Flex direction="column" className="m_5" marginTop={20}>
                  <Flex flexBasis="row" >
                      <Text>MI within last year </Text>
                      <ContextualHelp variant="info">
                        <Heading>Need help?</Heading>
                          <Content>
                            <Text>
                            Info for MI within last year goes here
                            </Text>
                          </Content>
                      </ContextualHelp>
                      <ActionGroup selectionMode="single" defaultSelectedKeys={['list']}>
                        <Item key="yes">Y</Item>
                        <Item key="no">N</Item>
                      </ActionGroup>
                  </Flex>

                  <Flex flexBasis="row" marginTop={10}>
                      <Text>PCI within last year</Text>
                      <ContextualHelp variant="info">
                        <Heading>Need help?</Heading>
                          <Content>
                            <Text>
                            Info for PCI within last year
                            </Text>
                          </Content>
                      </ContextualHelp>
                      <ActionGroup selectionMode="single" defaultSelectedKeys={['list']}>
                        <Item key="yes">Y</Item>
                        <Item key="no">N</Item>
                      </ActionGroup>
                  </Flex>

                  <Flex flexBasis="row" marginTop={10}>
                      <Text>Type 2 diabetes</Text>
                      <ContextualHelp variant="info">
                        <Heading>Need help?</Heading>
                          <Content>
                            <Text>
                            Info for Type 2 diabetes
                            </Text>
                          </Content>
                      </ContextualHelp>
                      <ActionGroup selectionMode="single" defaultSelectedKeys={['list']}>
                        <Item key="yes">Y</Item>
                        <Item key="no">N</Item>
                      </ActionGroup>
                  </Flex>

                  <Flex flexBasis="row" marginTop={10}>
                      <Text>High LDL-C levels</Text>
                      <ContextualHelp variant="info">
                        <Heading>Need help?</Heading>
                          <Content>
                            <Text>
                            Info for High LDL-C levels
                            </Text>
                          </Content>
                      </ContextualHelp>
                      <ActionGroup selectionMode="single" defaultSelectedKeys={['list']}>
                        <Item key="yes">Y</Item>
                        <Item key="no">N</Item>
                      </ActionGroup>
                  </Flex>

                  <Flex flexBasis="row" marginTop={10}>
                      <Text>maximally tolerated statin therapy?</Text>
                      <ContextualHelp variant="info">
                        <Heading>Need help?</Heading>
                          <Content>
                            <Text>
                            Info for maximally tolerated statin therapy?
                            </Text>
                          </Content>
                      </ContextualHelp>
                      <ActionGroup selectionMode="single" defaultSelectedKeys={['list']}>
                        <Item key="yes">Y</Item>
                        <Item key="no">N</Item>
                      </ActionGroup>
                  </Flex>



                  <Flex flexBasis="row" marginTop={10}>
                      <Text>On a beta-blocker?</Text>
                      <ContextualHelp variant="info">
                        <Heading>Need help?</Heading>
                          <Content>
                            <Text>
                            Info for On a beta-blocker?
                            </Text>
                          </Content>
                      </ContextualHelp>
                      <ActionGroup selectionMode="single" defaultSelectedKeys={['list']}>
                        <Item key="yes">Y</Item>
                        <Item key="no">N</Item>
                      </ActionGroup>
                  </Flex>

                  <Flex flexBasis="row" marginTop={10}>
                      <Text>Anticoagulation</Text>
                      <ContextualHelp variant="info">
                        <Heading>Need help?</Heading>
                          <Content>
                            <Text>
                            Info for Anticoagulation
                            </Text>
                          </Content>
                      </ContextualHelp>
                      <ActionGroup selectionMode="single" defaultSelectedKeys={['list']}>
                        <Item key="yes">Y</Item>
                        <Item key="no">N</Item>
                      </ActionGroup>
                  </Flex>

                  <Flex flexBasis="row" marginTop={10}>
                      <Text>Angina</Text>
                      <ContextualHelp variant="info">
                        <Heading>Need help?</Heading>
                          <Content>
                            <Text>
                            Info for Angina
                            </Text>
                          </Content>
                      </ContextualHelp>
                      <ActionGroup selectionMode="single" defaultSelectedKeys={['list']}>
                        <Item key="yes">Y</Item>
                        <Item key="no">N</Item>
                      </ActionGroup>
                  </Flex>

                  <Flex flexBasis="row" marginTop={10}>
                      {/* <Text>LVEF</Text> */}
                      <Slider label="LVEF" defaultValue={12} />
                  </Flex>

                </Flex>

                <Button  alignItems="right"> Submit</Button>
              </Item>

              <Item key="Rec">
                Senatus Populusque Romanus.
              </Item>
            </TabPanels>
          </Tabs>
        </View>




        </Flex>
      </View>

      </Provider>
</div>
  );
}

export default App;


