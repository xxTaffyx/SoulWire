# SoulASM Virtual Machine v0.002
# Now with memory access and control flow!

class SoulVM:
    def __init__(self):
        self.memory = [0] * 256
        self.pc = 0
        self.accumulator = 0
        self.running = True
        
        # Expanded instruction set
        self.opcodes = {
            0x00: self.halt,
            0x01: self.load,
            0x02: self.add,
            0x03: self.print,
            0x04: self.store,   # NEW: Store accumulator to memory
            0x05: self.sub,     # NEW: Subtract
            0x06: self.jump,    # NEW: Jump to address
            0x07: self.jz,      # NEW: Jump if zero
        }
        
        print("SoulVM v0.002 - Now with control flow!")
    
    def halt(self):
        self.running = False
        print("Soul rests.")
    
    def load(self):
        self.pc += 1
        value = self.memory[self.pc]
        self.accumulator = value
    
    def add(self):
        self.pc += 1
        value = self.memory[self.pc]
        self.accumulator += value
    
    def sub(self):
        self.pc += 1
        value = self.memory[self.pc]
        self.accumulator -= value
    
    def print(self):
        print(f"Soul speaks: {self.accumulator}")
    
    def store(self):
        # Store accumulator at memory address
        self.pc += 1
        address = self.memory[self.pc]
        self.memory[address] = self.accumulator
    
    def jump(self):
        # Jump to address
        self.pc += 1
        self.pc = self.memory[self.pc] - 1  # -1 because pc++ happens after
    
    def jz(self):
        # Jump if accumulator is zero
        self.pc += 1
        if self.accumulator == 0:
            self.pc = self.memory[self.pc] - 1
    
    def run(self, program=None):
        if program:
            for i, byte in enumerate(program):
                self.memory[i] = byte
        
        while self.running and self.pc < 256:
            opcode = self.memory[self.pc]
            if opcode in self.opcodes:
                self.opcodes[opcode]()
            else:
                print(f"Unknown opcode: {opcode} at PC: {self.pc}")
                self.running = False
            self.pc += 1

# Test with a simple countdown
if __name__ == "__main__":
    vm = SoulVM()
    
    # Simple test first - USING CORRECT OPCODES
    program = [
        0x01, 3,    # LOAD 3
        0x03,       # PRINT (should show 3)
        0x05, 1,    # SUB 1 (0x05 is SUB, not 0x02!)
        0x03,       # PRINT (should show 2)
        0x05, 1,    # SUB 1
        0x03,       # PRINT (should show 1)
        0x05, 1,    # SUB 1
        0x03,       # PRINT (should show 0)
        0x00        # HALT
    ]
    
    print("\nSimple countdown (no loops yet):")
    vm.run(program)